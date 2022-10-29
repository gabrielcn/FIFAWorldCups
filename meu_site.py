from flask import Flask, render_template

app = Flask(__name__)

# 1° página do site
# route -> projetoworldcup.com/
# função -> o que vc quer exibir naquela página
# template

@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/analises")
def analises():
    return render_template("analises.html")

@app.route("/grupos")
def grupos():
    return render_template("grupos.html")

@app.route("/escalacoes")
def escalacoes():
    return render_template("escalacoes.html")

# colocar o site no ar
if __name__ == "__main__":
    app.run(debug=True) # Todas a ediçoes que for fazendo no código, ele exibe dinamicamente no site, sem precisar debugar


    # servidor do heroku

