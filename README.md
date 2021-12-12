# Trino Tableau Connector

This repo provides a basic Tableau connector for Trino based on Tableau's built-in Presto dialect.

## Running in Development Mode

For Windows:
1. Create a directory for Tableau connectors. For example: `C:\tableau_connectors`
2. Put the contents of this repository (or clone it) into a folder in this directory. For example: `C:\tableau_connectors\trino`
3. Run Tableau using the `-DConnectPluginsPath` command-line argument, pointing to your connector directory. For example: `tableau.exe -DConnectPluginsPath=C:\tableau_connectors`

For macOS:
Note: In the steps below, replace `[username]` with your name (for example `/Users/hudsonb/tableau_connectors`) and `[version]` with the version of Tableau that you’re running (for example, `2019.3.app`).

1. Create a directory for Tableau connectors. For example: `/Users/[username]/tableau_connectors`
2. Put the contents of this repository (or clone it) into a folder in this directory. For example: `/Users/[username]/tableau_connector/trino`
3. Run Tableau using the `-DConnectPluginsPath` command-line argument and pointing to your connector directory. For example: `/Applications/Tableau\ Desktop\ [version].app/Contents/MacOS/Tableau -DConnectPluginsPath=/Users/[username]/tableau_connectors`

## Running as a packaged connector (🌮)

Refer to Tableau's documentation: https://tableau.github.io/connector-plugin-sdk/docs/run-taco