/*
 * $Id: Devel.js,v 1.14 2013-01-16 16:06:57 gaudenz Exp $
 * Copyright (c) 2006-2010, JGraph Ltd
 */
// This provides an indirection to make sure the mxClient.js
// loads before the dependent classes below are loaded. This
// is used for development mode where the JS is in separate
// files and the mxClient.js loads other files.

// Uses grapheditor from devhost
mxscript(geBasePath +'/OpenossadEditor.js');
mxscript(geBasePath +'/Graph.js');
mxscript(geBasePath +'/OpenossadGraph.js');
mxscript(geBasePath +'/Shapes.js');
mxscript(geBasePath +'/EditorUi.js');
mxscript(geBasePath +'/Actions.js');
mxscript(geBasePath +'/Menus.js');
mxscript(geBasePath +'/Sidebar.js');
mxscript(geBasePath +'/Toolbar.js');
mxscript(geBasePath +'/Dialogs.js');

// Loads main class
mxscript('js/diagramly/GoogleDrive.js');
mxscript('js/diagramly/Integration.js');
mxscript('js/diagramly/Dialogs.js');
mxscript('js/diagramly/OpenossadDialogs.js');
mxscript('js/diagramly/Sidebar.js');
mxscript('js/diagramly/EditorUi.js');
mxscript('js/diagramly/Sharing.js');
mxscript('js/diagramly/Diagramly.js');

mxscript('js/openossad/App.js');


