# React95 Native

## Links

* React95 web (non-native; i.e., not using this project, but it's the inspiration)
    * [React95](https://react95.io/)
    * [Coints95](https://coins95.web.app/)
* [Slack](https://join.slack.com/t/react95/shared_invite/enQtOTA1NzEyNjAyNTc4LWYxZjU3NWRiMWJlMGJiMjhkNzE2MDA3ZmZjZDc1YmY0ODdlZjMwZDA1NWJiYWExYmY1NTJmNmE4OWVjNWFhMTE)
* [Patreon for the original creator](https://www.patreon.com/arturbien)
* [PayPal for the original creator](https://www.paypal.me/react95)

## Development

### Example project

1. Install in the root:
   ```
   npm i
   ```
1. Build package:
   ```
   cd react95-native-rabbl
   npm run build
   ```
1. Start example:
   ```
   cd ../example
   npm run web
   ```

### New Build

```
# Update version in package.json
npm run build
npm login
npm publish

# Then
npm install react95-native-rabbl@latest
```
