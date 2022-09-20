# HN

## HealthNation react-native app

## Update 20.09.2022, check new app-release.apk:

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
