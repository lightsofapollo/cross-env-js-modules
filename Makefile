package:
	rm -f module.js
	touch module.js

	# Files must be included in order
	# of dependency
	cat lib/module.js >> module.js
	cat lib/alert.js >> module.js
	cat lib/ws.js >> module.js
	cat lib/index.js >> module.js

