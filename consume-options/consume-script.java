//Add following to build.gradle:
// implementation 'org.apache.httpcomponents:httpclient:4.5.14'
// implementation 'org.apache.httpcomponents:fluent-hc:4.5.10'
// implementation group: 'com.googlecode.json-simple', name: 'json-simple', version: '1.1'

package org.example;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class deta {
    public static void sendRequest(String data) throws Exception {
        // The URL of the API endpoint
        URL url = new URL("https://zxv5hi.deta.dev/predict/"+data);

        // Open an HttpURLConnection to the API endpoint
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        // Read the response data
        BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            response.append(line);
        }
        reader.close();

        // Print the response data
        System.out.println(response.toString());
    }
    public static void main(String[] args) {
        // Create the data to send to the service
        JSONObject obj = new JSONObject();
        // In this case, it's an array of arrays
        JSONArray item1 = new JSONArray();
        // Inner array has 10 elements
        item1.add(16);
        item1.add(100);
        item1.add(70);
        item1.add(7.2);
        item1.add(98);
        item1.add(80);
        obj.put("data", item1);
        //System.out.println(obj.toJSONString());
        // Make the request using the JSON document string
        try{
            sendRequest(obj.toJSONString());
        }catch(Exception e)
        {
            System.out.println(e);
        }
        
    }
}
