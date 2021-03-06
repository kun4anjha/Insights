/*******************************************************************************
 * Copyright 2017 Cognizant Technology Solutions
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/
package com.cognizant.devops.platforminsights.core.avg;

import java.io.Serializable;

public class Average implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -4941480846446243329L;
	
	public Average(Long total, Long num) {
		total_ = total;
		num_ = num;
	}
	public Long total_;
	public Long num_;
	public Long avg() {
		if(total_ == 0 || num_ == 0){
			return 0l;
		}
		return total_ /  num_;
	}
}
