import os
from flask import Flask, request
from flask_mail import Mail, Message
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()

port = int(os.environ.get('PORT', 5000))

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True 
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')

mail = Mail(app)


@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()  # Form verilerini al
    print(data)  # Gelen verileri terminale yazdır

    name = data.get('name')  # 'name' olarak gelen veriyi al
    email = data.get('mail')  # 'mail' olarak gelen veriyi al
    message = data.get('message')  # 'message' olarak gelen veriyi al
    
    print(f"İsim: {name}, E-posta: {email}, Mesaj: {message}")  # Verileri kontrol et

    msg = Message('Yeni İletişim Formu Gönderimi', 
                  sender=os.environ.get('MAIL_USERNAME'), 
                  recipients=['afyildiz@gmail.com'])
    
    # E-posta içeriği
    msg.body = f"İsim: {name}\nE-posta: {email}\n\nMesaj: {message}"
    
    mail.send(msg)
    return {'message': 'E-posta başarıyla gönderildi!'}, 200


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=port)