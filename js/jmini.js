'use strict';/* jMini Toolbox; Copyright 2026 Sascha Leib
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the “Software”), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* Attaches a listener for the "DOMContentLoaded" event to the document */
/* parameter: (Function, required) the callback function */
/* parent object: Element ( */
/* returns: HTMLDocument (passes through the parent element) */
document.onReady = function(cb) {
	document.addEventListener('DOMContentLoaded', cb);
	return document;
}
/* Page frameword core */
/* Authors:
    - Sascha Leib <ad@hominem.info>
 */
/* This project is licensed under the terms of the MIT license. */
let $p = {

	/* shadow init function */
	_init: function() {
		console.info('$p._init()');
		
		/* call sub-sections' pre-inits: */
		$p._callInit($p, true);
		
		/* Now call the actual inits: */
		$p._callInit($p);
		if ($p.init) $p.init($p);
	}, 
	
	/* initialize sub-items of an object: */
	_callInit: function(obj, pre = false) {
		//console.info('$p._callInit(obj=',obj,', pre=',pre,')');

		/* call init / _init on each sub-object: */
		Object.keys(obj).forEach( (key,i) => {
			const sub = obj[key];
			let init = null;
			if (typeof sub === 'object') {
				if (pre && sub._init) {
					init = sub._init;
				} else if (!pre && sub.init) {
					init = sub.init;
				}

				// bind to object
				if (typeof init == 'function') {
					const init2 = init.bind(sub);
					init2(obj);
				}
			}
		});

	}
}
/* call pre-init when the file is loaded */
document.addEventListener('DOMContentLoaded', $p._init);
/* Page GUI frameword core */
/* Authors:
    - Sascha Leib <ad@hominem.info>
 */
/* This project is licensed under the terms of the MIT license. */
$p.gui = {

	/* shadow init function */
	_init: function(p) {
		console.info('$p.gui._init()');
		//console.log('parent=',p);
		
		/* call sub-sections' pre-inits: */
		$p._callInit(this, true);
		
		/* Now call the actual init: */
		p._callInit(this);
		if (this.init) this.init(this);
	}
}