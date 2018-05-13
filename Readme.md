# Cat Composer

Projekt aplikacji do adopcji/najmu kotów, z pobliskich schronisk na terenie Gdańska/Trójmiasta

## Zaczynamy

Te instrukcje pozwolą Ci skopiować projekt i uruchomić go na Twoim komputerze w celu rozwoju,zmiany aplikacji lub do testów.

### Wymagania


Do uruchomienia projektu potrzeba kilku rzeczy

```

-node.js
-npm oraz yarn(do projektu używany był głównie yarn)
-React.js
-React-Router-Dom
-React-select
-google-maps-react

```

### Instalacja

Najpierw potrzebujesz narzędzia uruchomieniowego node.js, musimy je zainstalować za pomocą node version manager ( * [NVM](https://github.com/creationix/nvm))

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

```

Zrestartuj terminal oraz sprawdz czy narzędzie zainstalowało się poprawnie
```
command -v nvm

```
Zainstaluj node używając:
```
nvm install node

```

Następnie musimy pobrać narzędzie zarządzania paczkami Yarn, najpierw musimy dodać do Ubuntu klucz do repozytorium.
* [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

```

Teraz wystarczy odświerzyć listę naszych repozytoriów i zainstalować Yarn'a: 
```
sudo apt-get update && sudo apt-get install yarn

```
Kolejną rzeczą jest instalacja biblioteki React.js za pomocą create-react-app. W linku dokładna intrukcja instalacji.
* [create-react-app](setup.md)


Następnie potrzebujemy paczek:

```
-React-Router-Dom
-React-select
-google-maps-react
```
Intalujemy je kolejno :

```
yarn add react-router-dom
yarn add react-select
npm install google-maps-react

```

Po całej konfiguracji, aby uruchomić aplikację trzeba użyć komendy 
```
yarn start
```

W przypadku, gdy mamy już zainstalowanie node , npm oraz yarn wystarczy zklonować repozytorium i uzupełnić pakiety komendą:

```
yarn
```


## Zbudowano za pomocą:

* [NVM](https://github.com/creationix/nvm)
* [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)
* [create-react-app](setup.md)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [google-maps-react](https://github.com/fullstackreact/google-maps-react) 
* [react-select](https://github.com/JedWatson/react-select)

## Autorzy

* **Ewa Klebba**
* **Marta Wieczorek**
* **Michał Maniara**
* **Gerard Szulc**



