clear
echo "Instalando frontend"
cd ./rentxpress
npm install
echo "Instalando backend"
echo ../backend
python3.11 -m venv .venv
source ./.venv/Scripts/activate
python3.11 -m pip install poetry
python3.11 -m poetry install
echo ./api
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
echo ../..
deactivate
echo "Instalacion Finalizada"