install:
	npm ci
start_even:
	node bin/brain-even.js
start_calc:
	node bin/brain-calc.js
 publish:
	npm publish --dry-run
lint:
	npx eslint .
	