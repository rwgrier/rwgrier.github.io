This is the personal website for Ryan Grier. 

In order to run the side from code. 

1. `bundle install`
2. `npm install`
3. `bundle exec jekyll serve`

In order to generate a new tailwind.css file, run this command. 

```
NODE_ENV=production npx tailwindcss -c tailwind.config.js -o public/css/tailwind.css --minify
```