# Cat Composer

Projekt aplikacji do adopcji oraz najmu kotów, ze schronisk na terenie Trójmiasta

## Zaczynamy

Te instrukcje pozwolą Ci skopiować projekt i uruchomić go na Twoim komputerze w celu rozwoju bądź zmiany aplikacji, a także do testów.

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

W przypadku, gdy masz już zainstalowane node , npm, yarn oraz pakiet create-react-app wystarczy sklonować repozytorium i uzupełnić pakiety komendą:

```
yarn
```
W innym wypadku : 

Najpierw potrzebujesz narzędzia do uruchomienia node.js, zainstalujesz je za pomocą node version manager ( * [NVM](https://github.com/creationix/nvm))

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

```

Zrestartuj terminal i sprawdź, czy narzędzie zainstalowało się poprawnie:
```
command -v nvm

```
Zainstaluj node używając:
```
nvm install node

```

Kolejnym krokiem jest pobranie narzędzia do zarządzania paczkami Yarn, w tym celu najpierw musisz dodać do Ubuntu klucz do repozytorium.
* [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

```

Teraz wystarczy odświeżyć listę naszych repozytoriów i zainstalować Yarn'a: 
```
sudo apt-get update && sudo apt-get install yarn

```

Kolejną rzeczą jest instalacja biblioteki React.js za pomocą create-react-app. W linku dokładna intrukcja instalacji.
* [create-react-app](setup.md)


By obsługiwać te same metody, potrzebujesz następujących paczek:

```
-React-Router-Dom
-React-select
-google-maps-react
```
Intalujemy kolejno:

```
yarn add react-router-dom
yarn add react-select
yarn install google-maps-react
```

Po całej konfiguracji, aby uruchomić aplikację trzeba użyć komendy 

```
yarn start
```



W przypadku problemów z wersjami paczek po klonowaniu można usunąć plik [yarn.lock](yarn.lock)


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



