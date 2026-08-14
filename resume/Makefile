.PHONY: all clean

all: main.pdf
	cp main.pdf ../assets/resume.pdf

main.pdf: main.tex resumeutils.sty
	tectonic main.tex

clean:
	rm -f main.pdf main.aux main.log main.out main.fls main.fdb_latexmk
