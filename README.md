# BeautifyJson

Generate Library
nx g @nrwl/angular:library my-ui-lib --tags=ui

Generate Component
nx g @nrwl/angular:component my-component --project=name-library --export nx g @nrwl/angular:component my-component --project=name-library --inline-template --inline-style --flat --export

Generate ngrx store
nx g @nrwl/angular:ngrx products --module=libs/products/src/lib/products.module.ts --directory +state/products --no-interactive --facade