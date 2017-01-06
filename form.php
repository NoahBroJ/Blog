<form action="action_page.php" id="Form">
    <div class="fa fa-times fa-2x" id="CancelButton" onclick="changeHeight('formContainer', '0px')" aria-hidden="true"></div>
    Author:
    <br>
    <input type="text" name="author" value="">
    <br><br>
    Title:
    <br>
    <input type="text" name="title" value="">
    <br><br>
    Subject:
    <br>
    <input type="text" name="subject" value="">
    <br><br> 
    <textarea name="content" id="FormTextarea" cols="30" rows="10"></textarea><br>
    <input type="submit" value="Submit" id="SubmitButton">
</form>