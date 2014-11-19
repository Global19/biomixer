///<reference path="headers/require.d.ts" />

///<reference path="headers/d3.d.ts" />

///<amd-dependency path="UndoRedo/UndoRedoManager" />
///<amd-dependency path="GraphView" />

import UndoRedoManager = require("./UndoRedo/UndoRedoManager");
import GraphView = require("./GraphView");


 
// TODO Will likely use one for layout triggers (to allow naming) and another for
// arbitrary layout change snapshots.
export class LayoutModificationCommand<N extends GraphView.BaseNode> implements UndoRedoManager.ICommand{
    constructor(
    ){
        // LEFTOFF
    }
    
    getUniqueId(): string{
        return ""; // timestamps especially for layouts!
    }
    
    getDisplayName(): string{
        return "Modified Layout";
    }
    
    // TODO This implies that nodes should be added to the graph only
    // via the ExpansionSet, so that the logic is the same when adding a node
    // as when redoing the addition of a set. Hmmm...
    executeRedo(): void{
    
    }
    
    executeUndo(): void{
    
    }
    
    preview(): void{
    
    }
    
    nodeInteraction(nodeId: string): UndoRedoManager.NodeInteraction{
        return null;
    }
}