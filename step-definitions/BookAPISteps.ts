import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
import apiPayloads from '../testData/apiPayload.json';
import { APIUtils } from "../utils_ts/APIUtils";
import { APIValidations } from "../apiValidation/ApiValidations";
import {request} from '@playwright/test';
Given('User sends POST requests for creating a book', async function () {
           // Write code here that turns the phrase above into concrete actions
           let apiContext = await request.newContext();
            let apiUtils = new APIUtils(apiContext);
            let response = await apiUtils.postAPICall(
                apiPayloads.endPointURl,
                apiPayloads.createBookApi.requestPayload
            );
            let apiValidations = new APIValidations();
            await apiValidations.verifyCreateBookAPIBody(response,apiPayloads);
           
         });