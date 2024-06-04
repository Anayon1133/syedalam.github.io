from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder='.')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cv')
def cv():
    return send_from_directory('static/cv', 'resume.pdf')

if __name__ == '__main__':
    app.run(debug=True)
