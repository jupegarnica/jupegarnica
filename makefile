run:
	 deno-create-react-app run --watch --port 8000

build:
	deno-create-react-app build
release:
    sh release.sh
install:
	deno install -Af --unstable -n deno-create-react-app https://deno.land/x/create_react_app/mod.ts
