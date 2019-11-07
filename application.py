from flask import Flask, flash, redirect, render_template, request, session

application = Flask(__name__)
application.config['SECRET_KEY'] = 'yikes'

@application.route('/', methods=['GET'])
def fetchIndex():
    return render_template('index.html')

if __name__ == '__main__':
    application.run()
