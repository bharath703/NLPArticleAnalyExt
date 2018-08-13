/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.corenpl;

/**
 *
 * @author Bharath
 */
public class Response {

    private boolean success;
    private String articleText;
    private String status;
    
    public Response(String status, boolean success, String articleText) {
        this.status = status;
        this.success = success;
        this.articleText = articleText;
    }

    public boolean getSuccess() {
        return success;
    }

    public String getArticleText() {
        return articleText;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setSuccess(boolean  success) {
        this.success = success;
    }
    
    public void setArticleText(String articleText) {
        this.articleText = articleText;
    }
}
