## Feature Comparison

The grid below represents a comparison of features from the available and most used Webpack development servers.

#### Key

✅ - Feature Supported<br/>
✳️ - Best Feature Support<br/>
ℹ️ - Supported, with caveats<br/>
⏺ - Feature Not Needed<br/>

|                           | webpack-plugin-serve | webpack-dev-server | webpack-serve |
| :---                      | :---: | :---: | :---: |
| Allowed Hosts             | ⏺ | ✅ |    |
| Bonjour Broadcasting      | ℹ️ | ✅ | ℹ️ |
| Configurable Host         | ✳️ | ✅ | ✅ |
| Configurable Client Host  | ✳️ | ✅ |   |
| Configurable Port         | ✳️ | ✅ | ✅ |
| Custom Headers            | ℹ️ | ✅ | ℹ️ |
| Custom Middleware         | ✳️ | ℹ️ | ✅ |
| History Fallback          | ✅ | ✅ | ✅ |
| HTTPS                     | ✅ | ✅ | ✅ |
| HTTP/2                    | ✅ |    | ✅ |
| HTTP/2 SSL                | ✅ |    |    |
| Hot Module Replacement    | ✳️ | ✅ | ✅ |
| Lazy Mode                 |    | ✅ |    |
| Live Reload               | ✅ |    |    |
| Open in Browser           | ✳️ | ✅ | ✅ |
| Request Compression       | ✅ | ✅ | ℹ️ |
| Progress Overlay          | ✳️ | ✅ | ℹ️ |
| Proxying                  | ✅ | ✅ | ℹ️ |
| Serverless WebSockets     | ✅ |    |    |
| Status Overlay            | ✳️ | ✅ | ℹ️ |
| Unix Sockets              |    | ✅ |    |
| WebSocket Reconnect       | ✅ | ✅ | ✅ |
| Package Size              | 5.77MB | 14.7MB | 8.01MB |


## Standout Features

- Fully functional **Hot Module Replacement with MultiCompilers**. `webpack-plugin-serve` is the only development server for Webpack which applies HMR updates from multiple compilers/configurations to the page _without a page reload_.
- Host and Port can be set to a `Promise`, which allows for dynamic host and port resolution before the server starts.
- The client (browser) WebSocket host can be set, allowing full customization for contain environments.
- Fully customizable middleware, including execution order of built-in middleware. Users may implement whichever middleware they desire in the order which works best for them.
- Leverages the `opn` module and all of it's available options, without restriction, for opening the target application in the browser automatically.
- A themed, UX-consistent Build Status (errors, warnings) overlay with minimized beacon mode for monitoring the status of builds during editing.
- A themed, UX-consistent set of Build Progress overlay+indicator, with minimal option.
- Superior serverless WebSocket connectivity.
