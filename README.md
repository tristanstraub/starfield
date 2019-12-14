# starfield

clojure -A:client

https://tristanstraub.github.io/starfield/target/public

# releasing gh-pages

git checkout gh-pages
git rebase master
./build
git add target
git commit -m "release"
git push
