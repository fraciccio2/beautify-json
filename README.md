# BeautifyJson

Generate Library
nx g @nx/angular:library my-ui-lib --tags=ui

Generate Component
nx g @nx/angular:component my-component --project=name-library --export nx g @nrwl/angular:component my-component --project=name-library --inline-template --inline-style --flat --export

Generate ngrx store
nx g @nx/angular:ngrx products --module=libs/products/src/lib/products.module.ts --directory +state/products --no-interactive --facade