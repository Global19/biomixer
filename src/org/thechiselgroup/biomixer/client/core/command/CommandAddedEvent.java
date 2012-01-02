/*******************************************************************************
 * Copyright 2009, 2010 Lars Grammel 
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *
 *    http://www.apache.org/licenses/LICENSE-2.0 
 *     
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License.  
 *******************************************************************************/
package org.thechiselgroup.biomixer.client.core.command;

import com.google.gwt.event.shared.GwtEvent;

public class CommandAddedEvent extends
        CommandManagerEvent<CommandAddedEventHandler> {

    public static final GwtEvent.Type<CommandAddedEventHandler> TYPE = new GwtEvent.Type<CommandAddedEventHandler>();

    public CommandAddedEvent(CommandManager commandManager,
            UndoableCommand command) {
        super(commandManager, command);
    }

    @Override
    protected void dispatch(CommandAddedEventHandler handler) {
        handler.onCommandAdded(this);
    }

    @Override
    public GwtEvent.Type<CommandAddedEventHandler> getAssociatedType() {
        return TYPE;
    }

}