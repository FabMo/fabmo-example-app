example.fma: clean *.html js/*.js js/lib/*.js css/*.css img/*.png icon.png package.json
	zip example.fma *.html js/*.js js/lib/*.js css/*.css img/*.png icon.png package.json files/*.pdf

.PHONY: clean

clean:
	rm -rf example.fma
