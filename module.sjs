macro import {
	rule {
		{ $modules (,) ... } from $module:lit;
	} => {
		$(var $modules = require($module).$modules;) ...
	}
}

import { support, dispatchClick } from './utils';
import { foo } from './goo';

macro export {
	rule {
		{ $modules (,) ... };
	} => {
		$(exports.$modules = $modules;) ...
	}
}

export { support, dispatchClick };
export { goo };