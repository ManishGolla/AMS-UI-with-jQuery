function selectAgents(){
    if($("#agentselect").find(":selected").text()=='All Agents'){
        $("#agentid").hide();
    }
    else if($("#agentselect").find(":selected").text()=='Single Agent'){
        $("#agentid").show();
    }
}