Search.setIndex({"docnames": ["intro", "napari_workshop/01_images_are_numpy_arrays", "napari_workshop/08_napari-assistant", "napari_workshop/09_notebook_export", "napari_workshop/interactive_object_classification/readme", "napari_workshop/interactive_pixel_classification/readme", "napari_workshop/interactive_unsupervised_object_classification/readme", "napari_workshop/multichannel_analysis/readme"], "filenames": ["intro.md", "napari_workshop/01_images_are_numpy_arrays.ipynb", "napari_workshop/08_napari-assistant.md", "napari_workshop/09_notebook_export.md", "napari_workshop/interactive_object_classification/readme.md", "napari_workshop/interactive_pixel_classification/readme.md", "napari_workshop/interactive_unsupervised_object_classification/readme.md", "napari_workshop/multichannel_analysis/readme.md"], "titles": ["Bio-Image Analysis with napari", "Images in python", "The Napari Assistant", "Generating Jupyter Notebooks from the Napari Assistant", "Interactive object classification in Napari", "Interactive pixel classification and object segmentation in Napari", "Interactive unsupervised object classification in Napari", "Multichannel Analysis in Napari"], "terms": {"In": [0, 1, 3, 4, 5, 6, 7], "thi": [0, 2, 3, 4, 5, 6, 7], "cours": 0, "we": [0, 1, 3, 4, 5, 6, 7], "explor": [0, 2, 6], "wai": 0, "analyz": 0, "visual": [0, 1], "microscopi": [0, 1], "an": [0, 1, 2, 5, 6], "nd": 0, "viewer": [0, 3], "open": [0, 1, 2, 3, 4, 5, 6, 7], "sourc": 0, "softwar": 0, "some": [0, 1, 4, 6, 7], "plugin": [0, 2, 4, 5, 6, 7], "interact": 0, "conveni": 0, "perform": 0, "especi": 0, "assist": [0, 6], "apoc": [0, 4, 5], "cluster": 0, "plotter": [0, 6], "also": [0, 1, 2, 3, 4, 5], "featur": [0, 7], "extract": [0, 7], "us": [0, 2, 3, 4, 5, 6, 7], "skimag": [0, 1, 6, 7], "regionprop": [0, 6, 7], "plot": [0, 1], "against": 0, "each": [0, 1, 5, 7], "other": [0, 1, 3, 4, 5, 7], "multichannel": 0, "where": [0, 1, 5], "measur": [0, 6, 7], "summari": [0, 7], "statist": [0, 7], "object": [0, 7], "one": [0, 1, 4, 5, 6, 7], "channel": [0, 1, 5, 7], "rel": 0, "anoth": [0, 1, 4], "all": [0, 2, 6], "mention": [0, 6], "abov": [0, 1], "ar": [0, 2, 4, 5, 7], "part": [0, 6], "devbio": [0, 6], "bundl": 0, "which": [0, 6, 7], "collect": [0, 1], "development": 0, "biologi": 0, "jupyt": 0, "notebook": 0, "illustr": 0, "reproduc": [0, 3], "exampl": [0, 1, 2, 4, 5, 6, 7], "For": [0, 1, 5, 7], "instal": 0, "our": [0, 1, 4, 6], "packag": 0, "conda": [0, 2, 4, 5, 6, 7], "environ": [0, 4, 5, 6, 7], "pleas": 0, "follow": [0, 4, 5, 7], "instruct": 0, "below": [0, 1, 3, 7], "from": [0, 1, 2, 4, 5, 6, 7], "blog": 0, "post": [0, 4, 6], "written": 0, "mara": 0, "lampert": 0, "updat": [0, 1, 2], "stefan": 0, "hahmann": 0, "again": [0, 2, 3, 4, 6], "under": [0, 1, 5, 6], "cc": 0, "BY": 0, "4": [0, 1], "0": [0, 1, 6, 7], "licens": [0, 1], "your": [0, 3, 4, 5, 6, 7], "comput": [0, 1, 5], "go": 0, "page": 0, "github": 0, "here": [0, 7], "click": [0, 2, 3, 4, 5, 6, 7], "green": [0, 1, 7], "button": [0, 2, 3, 5, 6, 7], "code": [0, 3], "choos": [0, 2, 6], "option": [0, 3], "The": [0, 1, 3, 4, 5, 6, 7], "most": 0, "straight": 0, "forward": [0, 3], "download": 0, "zip": 0, "file": [0, 2, 3, 4, 5, 6, 7], "If": [0, 3, 4, 5], "you": [0, 2, 3, 4, 5, 6], "do": [0, 1, 2, 6, 7], "unzip": 0, "folder": [0, 3, 5, 7], "choic": 0, "rememb": [0, 6], "place": [0, 4], "wa": 1, "base": [1, 6], "00_images_are_arrai": 1, "scipi": 1, "2023": 1, "nalaysi": 1, "repositori": [1, 3, 7], "bsd": 1, "3": [1, 5], "claus": 1, "new": [1, 2, 4, 5, 6, 7], "revis": 1, "show": [1, 2, 5, 6, 7], "how": [1, 7], "displai": [1, 7], "them": [1, 6], "order": [1, 3], "need": [1, 4], "introduc": 1, "three": [1, 4], "librari": 1, "scikit": [1, 6], "matplotlib": 1, "breifli": 1, "function": [1, 3], "process": [1, 2, 4, 5, 6], "fundament": 1, "scientif": 1, "standard": 1, "repres": [1, 7], "allow": [1, 2], "maximum": 1, "inter": 1, "oper": [1, 2], "ecosystem": 1, "import": 1, "give": 1, "alia": 1, "np": 1, "can": [1, 2, 3, 4, 5, 6, 7], "build": 1, "1d": 1, "numpy_arrai": 1, "1": [1, 4, 6], "2": [1, 3, 4, 5, 6], "To": [1, 7], "2d": [1, 2], "simpli": 1, "add": [1, 2, 3, 4, 5, 7], "level": 1, "squar": 1, "bracket": 1, "5": 1, "6": [1, 7], "check": [1, 6, 7], "shape": [1, 4, 6], "return": 1, "tupl": 1, "number": [1, 5, 7], "os": 1, "row": 1, "column": [1, 6, 7], "A": [1, 5, 7], "alradi": 1, "understood": 1, "valu": 1, "correspond": [1, 6], "intens": [1, 6, 7], "pixel": [1, 4], "let": [1, 7], "s": [1, 3, 7], "imshow": 1, "cmap": 1, "grai": 1, "argument": 1, "defin": 1, "should": [1, 3, 4, 5, 6, 7], "grayscal": 1, "palett": 1, "pyplot": 1, "plt": 1, "axesimag": 1, "0x16d8dfa3fa0": 1, "see": 1, "same": [1, 6], "hold": [1, 6], "real": 1, "world": 1, "take": 1, "look": [1, 3, 6], "load": [1, 3, 4, 5, 6], "data": [1, 3, 7], "coin": 1, "colorbar": 1, "0x16d8f235370": 1, "assess": 1, "type": 1, "ndarrai": 1, "differ": [1, 4, 6, 7], "up": [1, 2, 3, 4, 5, 6, 7], "tabl": [1, 6, 7], "colormap": [1, 7], "These": 1, "true": 1, "color": [1, 6], "thei": [1, 7], "just": [1, 4, 5, 6], "translat": 1, "specifi": 1, "instead": [1, 2], "bar": 1, "remain": 1, "sometim": 1, "view": [1, 2, 3], "perspect": 1, "mai": [1, 3], "insight": 1, "more": [1, 4, 7], "obviou": 1, "spot": 1, "background": [1, 3, 5, 7], "heterogen": 1, "than": [1, 7], "gist_stern": 1, "0x16d8f2eb0a0": 1, "have": [1, 3, 5, 6], "dimens": [1, 6], "3d": [1, 2], "last": [1, 3, 6], "ha": [1, 5], "size": [1, 5, 6], "red": 1, "blue": [1, 4], "z": 1, "stack": 1, "slice": 1, "furhtermor": 1, "multipl": 1, "acquir": 1, "detector": 1, "typic": 1, "store": [1, 6], "extra": 1, "cells_3d": 1, "cells3d": 1, "60": 1, "256": 1, "iamg": 1, "provid": [1, 6], "indic": 1, "30th": 1, "first": [1, 3, 6], "notic": 1, "index": 1, "start": [1, 2], "so": [1, 3, 4, 6], "29": 1, "cells_membranes_slic": 1, "0x16d90453e80": 1, "get": 1, "magma": 1, "watermark": 1, "load_ext": 1, "ivers": 1, "2024": 1, "03": 1, "08t14": 1, "30": 1, "44": 1, "787998": 1, "01": 1, "00": 1, "implement": 1, "cpython": 1, "9": 1, "16": 1, "ipython": 1, "8": 1, "14": 1, "compil": 1, "msc": 1, "v": 1, "1929": 1, "64": 1, "bit": [1, 6], "amd64": 1, "window": [1, 2, 4, 5, 6, 7], "releas": 1, "10": 1, "machin": [1, 6], "processor": 1, "intel64": 1, "famili": 1, "model": [1, 5], "165": 1, "step": [1, 2], "genuineintel": 1, "cpu": 1, "core": 1, "architectur": 1, "64bit": 1, "7": 1, "23": 1, "21": 1, "set": [2, 3], "imag": [2, 3, 4, 5, 6, 7], "workflow": [2, 3, 6], "tutori": [2, 3], "avail": [2, 3], "video": [2, 3, 4, 5], "mp4": [2, 3], "command": [2, 5], "line": [2, 3, 4, 5], "like": [2, 3, 4, 6], "activ": [2, 4, 5, 6, 7], "intro": [2, 4, 5, 7], "env": [2, 4, 5, 7], "menu": [2, 3, 4, 5, 6, 7], "sampl": [2, 4, 5, 6], "cell": [2, 3, 7], "2ch": 2, "dataset": [2, 4, 5, 6], "tool": [2, 4, 5, 6, 7], "util": [2, 3], "na": 2, "within": [2, 3, 5, 6], "panel": [2, 3], "remov": [2, 3], "nois": 2, "ey": 2, "layer": [2, 3, 4, 5, 6, 7], "list": 2, "hide": [2, 4, 6], "origin": [2, 6], "result": [2, 3, 5], "onli": [2, 6, 7], "binar": 2, "gener": 2, "binari": 2, "current": [2, 3], "toggl": 2, "visibl": 2, "after": [2, 3, 4, 6], "switch": 2, "back": [2, 5, 7], "label": [2, 4, 5, 6, 7], "connect": [2, 5], "compon": [2, 5], "clesperanto": [2, 4, 5], "select": [2, 3, 4, 5, 6, 7], "gaussian_blur": 2, "modifi": [2, 3], "its": 2, "sigma": [2, 6], "paramet": [2, 6], "note": 2, "subsequ": 2, "threshold": 2, "otsu": [2, 4, 6], "grid": [2, 6], "continu": 2, "close": [2, 5, 6], "except": 2, "nuclei": [2, 3, 6], "membran": 2, "turn": [2, 6], "off": 2, "time": [2, 4, 6], "chang": [2, 5, 7], "spot_sigma": 2, "inspect": [2, 3, 6], "singl": 2, "export": 3, "python": 3, "e": [3, 4], "g": [3, 4], "export_notebook": 3, "lab": 3, "ask": 3, "kernel": 3, "keep": 3, "default": 3, "when": [3, 4, 5], "execut": 3, "error": 3, "appear": [3, 4, 7], "scroll": [3, 6], "down": [3, 6], "end": 3, "messag": 3, "read": 3, "what": 3, "didn": [3, 5], "t": [3, 5, 6], "work": [3, 5], "scoll": 3, "imread": 3, "disc": 3, "mean": [3, 7], "symbol": 3, "uncom": 3, "replac": 3, "path": 3, "tif": [3, 7], "local": 3, "slash": 3, "intead": 3, "backslash": 3, "comment": 3, "shown": [3, 4, 5], "clone": 3, "found": [3, 7], "nuclei3d": 3, "case": 3, "don": [3, 6], "save": [3, 5, 7], "alreadi": 3, "afterward": [3, 4, 5, 6, 7], "rerun": 3, "want": [3, 7], "raw": 3, "togeth": 3, "segment": [3, 4], "add_imag": 3, "image0_n": 3, "nbscreenshot": 3, "manual": 3, "At": 3, "voil\u00e0": 3, "now": [3, 6, 7], "document": 3, "share": 3, "train": [4, 5], "random": [4, 5], "forest": [4, 5], "classifi": [4, 5, 6], "acceler": [4, 5], "termin": [4, 5, 6, 7], "mamba": [4, 5, 6, 7], "blob": [4, 5], "imagej": [4, 5], "furthermor": 4, "creat": 4, "earlier": 4, "gauss": 4, "point": 4, "procedur": [4, 5], "renam": 4, "class": [4, 6], "annot": [4, 5], "mix": 4, "brush": [4, 5], "put": 4, "small": [4, 5], "dot": [4, 6], "roundish": 4, "purpos": 4, "realli": 4, "smaller": [4, 5], "ones": 4, "increas": [4, 5], "draw": [4, 5, 6], "throught": 4, "larger": 4, "elong": 4, "center": 4, "user": [4, 5], "interfac": [4, 5], "checkbox": [4, 7], "run": [4, 6, 7], "second": 4, "brown": 4, "round": 4, "unintention": 4, "newli": 4, "happi": 4, "copi": 4, "safe": 4, "next": 4, "might": 4, "overwritten": 4, "retrain": 4, "differenti": 4, "larg": 4, "exercis": [5, 6, 7], "convert": 5, "instanc": 5, "hood": 5, "paint": 5, "region": [5, 6], "drawn": 5, "interest": 5, "closer": 5, "two": 5, "degre": 5, "freedom": 5, "optim": 5, "later": 5, "right": 5, "well": 5, "consid": [5, 6], "objectsegment": 5, "cl": 5, "been": 5, "locat": 5, "befor": [5, 6, 7], "perfom": [6, 7], "umap": 6, "hdbscan": 6, "assign": 6, "human": 6, "mitosi": 6, "builtin": 6, "appli": 6, "voronoi": 6, "algorithm": 6, "pyclesperanto": 6, "nsbatwm": 6, "through": 6, "via": 6, "tune": 6, "widget": [6, 7], "screen": 6, "doe": 6, "pollut": 6, "lot": 6, "calcul": 6, "properti": [6, 7], "nsr": 6, "box": 6, "hit": 6, "refer": [6, 7], "human_mitosi": 6, "taken": 6, "tab": 6, "lower": 6, "feel": 6, "free": 6, "reason": 6, "worri": 6, "delet": 6, "ncp": 6, "few": 6, "ax": 6, "dropdown": [6, 7], "area": 6, "mean_intens": [6, 7], "mous": 6, "around": 6, "highlight": [6, 7], "main": 6, "canva": 6, "shift": 6, "while": 6, "drag": 6, "cursor": 6, "reduc": 6, "method": 6, "pop": 6, "crtl": 6, "yet": 6, "hdbscan_cluster_id": 6, "try": 6, "infer": 6, "why": 6, "were": 6, "mode": [6, 7], "better": 6, "without": 6, "ani": 6, "ground": 6, "truth": 6, "relationship": 6, "learn": 6, "relat": 7, "actin": 7, "dna": 7, "cell_label": 7, "dna_label": 7, "blend": 7, "addit": 7, "adjust": 7, "magenta": 7, "respect": 7, "configur": 7, "count": 7, "unselect": 7, "averag": 7, "mani": 7, "contain": 7, "id": 7, "counts_dna_label": 7, "element": 7, "mean_intensity_dna_labels_averag": 7, "csv": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"bio": 0, "imag": [0, 1], "analysi": [0, 7], "napari": [0, 2, 3, 4, 5, 6, 7], "get": [0, 4, 5, 6, 7], "start": [0, 4, 5, 6, 7], "miniforg": 0, "python": [0, 1], "clone": 0, "repositori": 0, "ar": 1, "numpi": 1, "arrai": 1, "n": 1, "dimension": [1, 6], "exercis": [1, 4], "packag": 1, "version": 1, "us": 1, "run": 1, "thi": 1, "notebook": [1, 3], "The": 2, "assist": [2, 3], "gener": 3, "jupyt": 3, "from": 3, "interact": [4, 5, 6], "object": [4, 5, 6], "classif": [4, 5, 6], "extra": 4, "pixel": 5, "segment": [5, 6], "unsupervis": 6, "instanc": 6, "featur": 6, "extract": 6, "plot": 6, "reduct": 6, "cluster": 6, "visual": 6, "result": 6, "multichannel": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})