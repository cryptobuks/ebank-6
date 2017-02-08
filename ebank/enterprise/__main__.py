import sys
from os.path import dirname, realpath
sys.path.append(dirname(dirname(dirname(realpath(__file__)))))

from ebank.enterprise import app
app.run(debug=True)
