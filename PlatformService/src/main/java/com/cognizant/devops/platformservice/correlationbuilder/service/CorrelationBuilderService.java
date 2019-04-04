package com.cognizant.devops.platformservice.correlationbuilder.service;

import java.io.IOException;

import com.cognizant.devops.platformcommons.config.ApplicationConfigProvider;
import com.cognizant.devops.platformcommons.exception.InsightsCustomException;
import com.google.gson.JsonObject;

public interface CorrelationBuilderService {
	
	public String getCorrelationJson() throws IOException, InsightsCustomException;
}
