import Stack from "./stack";

class UndoManager {
    constructor() {
        pileUndo = new Stack();
        pileRedo = new Stack();
    }
    execute(command) {
        command.execute();
        pileUndo.push(command);
        
    }
    canUndo(){
        return !pileUndo.isEmpty();
    }
    canRedo(){
        return !pileRedo.isEmpty();
    }
    undo(){
        command = pileUndo.pop();
        pileUndo.push(command);
        command.undo();
    }
    redo(){
        if (pileRedo.isEmpty()) {
            return;
        }
        let command = pileRedo.pop();
        pileUndo.push(command);
        command.execute();

    }
    
}

export default UndoManager;


