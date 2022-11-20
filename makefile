hello: server

install:
	brew install hugo

server:
	hugo server -D --ignoreCache --disableFastRender --noHTTPCache --watch --minify
