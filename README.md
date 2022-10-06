# HN

## HN react-native app

## 🛑💡🛑💡🛑Update 07.10.2022, check new app-release.apk:🛑💡🛑💡🛑

React-native-image-picker implemented;

ADDING IMAGES TO POST IN FLATLIST IN PROGRESS;

"Nowy Post" screen in drawer navigation updated:

- Now, by pressing buttons: "Zdjęcie z aparatu" or "Zdjęcie z galerii" you can add photo from camera or add existing photo from your gallery and then see a preview
  of added photo.
- Next step TO DO - sending picture using redux to new post in flatlist.

## Update 30.09.2022:

Redux implemented in app

"Artykuły" tab in Main Panel done:

- FlatList with items from local json file;

"Nowy Post" screen in drawer navigation:

- Inputs can be filled with data and send using Redux to FlatList in "Artykuły" tab.
- New post will be displayed at the end of the list.

## Update 20.09.2022:

Top Tab Bar Navigation rebuilt, changed styles of drawer nav & header nav, minor styling.

######INSTALLATION:

git clone
npm install
npx react-native run-android

## added in repo APK file (app-release.apk) to download & install straight on your

## Navigate in app to WYDARZENIA tab to read my comment

json file generated from:
https://json-generator.com/#

TEMPLATE OF JSON:

> {"data":
> [
>
> > '{{repeat(50,70)}}',
> > {
> > \_id: '{{objectId()}}',
> > index: '{{index()}}',
> > isActive: '{{bool()}}',
> > picture: 'https://i.kym-cdn.com/photos/images/facebook/001/564/773/6cf.jpg',
> > age: '{{integer(20, 40)}}',
> > name: '{{firstName()}} {{surname()}}',
> > gender: '{{gender()}}',
> > title: '{{lorem(0)}}',
> > articleText: '{{lorem(1, "paragraphs")}}',
> > time: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
> > }
> > ]
> > }

json stored at:
https://api.npoint.io/4d4008557f9ac84ebe64
