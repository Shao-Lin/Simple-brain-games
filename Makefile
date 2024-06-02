install:
	npm ci
start_even:
	node bin/brain-even.js
start_calc:
	node bin/brain-calc.js
start_gcd:
	node bin/brain-gcd.js
start_progression:
	node bin/brain-progression.js
 publish:
	npm publish --dry-run
lint:
	npx eslint .
	