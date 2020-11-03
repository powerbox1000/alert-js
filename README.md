# AlertJs
A library to alert the user with success, error, info, and warning. (Please read the README.md before usage)

## <a name="warnings">Warnings</a>
The following element classes and IDs (in css format) are reserved:

* .success
* .errModal
* .info
* .warning
* #success
* #message
* #errMsg
* #errModal
* #warning
* #warnMsg

## Usage

First, include the script <br>
`<script src="path/to/alertJs.js"></script>` <br>
Then, insert this into your HTML: <br>
`<div id="elId"></div>` replacing `elId` with the id. Remember to please watch out for [reserved IDs](#warnings)! <br>
Finally, inject the AlertJs code: <br>
```javascript
var element = document.getElementById("elId"); //replace elId with your id
AlertJs.inject(element);

```

### Success
`AlertJs.success(message);`

### Error
`AlertJs.error(message);`

### Info
`AlertJs.inform(message);`

### Warning
`AlertJs.warn(message);`
