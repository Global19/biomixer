/*******************************************************************************
 * Copyright (C) 2011 Lars Grammel 
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
package org.thechiselgroup.biomixer.client.core.util.callbacks;

import org.thechiselgroup.biomixer.client.core.util.transform.Transformer;

/**
 * Wraps exceptions thrown during {@link Transformer#transform(Object)} and
 * contains the original value.
 * 
 * @author Lars Grammel
 */
public class TransformationException extends Exception {

    private static final long serialVersionUID = 1L;

    private final Object originalValue;

    public TransformationException(Object originalValue, Exception cause) {
        super("failed to transform '" + originalValue.toString() + "'", cause);
        this.originalValue = originalValue;
    }

    public Object getOriginalValue() {
        return originalValue;
    }

}