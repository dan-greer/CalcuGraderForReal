from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired

class CalculatorForm(FlaskForm):
    class1Grade = StringField('Class 1 Grade', validators=[DataRequired()])