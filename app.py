from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('base.html')

@app.route('/cv')
def cv():
    return send_from_directory('static/cv', 'your_cv.pdf')

if __name__ == '__main__':
    app.run(debug=True)