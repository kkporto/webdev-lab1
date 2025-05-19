

export default function AssignmentEditor() {


     return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
            <h2></h2>
   
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />

      <h2></h2>
   

      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
   
   
<h2></h2>

<label >Assignment group:    </label>
<select>
   <option value="A">Group A</option>
   <option value="B">Group B</option>
   <option value="C">Group C</option>
   <option value="D">Group D</option>
   <option value="None">None</option>
</select>

<h4></h4>

<label >Display grade as:    </label>
<select>
   <option value="PERCENTAGE">Percentage</option>
   <option value="GPA" >GPA</option>
</select>

<h4></h4>

<label >Submission type:    </label>
<select>
   <option value="A">Online</option>
   <option value="B">In person</option>
</select>

<h4></h4>


<label>Online Entry Options Allowed:</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-txt"/>
<label htmlFor="wd-chkbox-txt">Text Entry</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-web"/>
<label htmlFor="wd-chkbox-web">Website URL</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-media"/>
<label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-annot"/>
<label htmlFor="wd-chkbox-annot">Student Annotation</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-pdf"/>
<label htmlFor="wd-chkbox-pdf">PDF scan</label>



      <h2></h2>
   
      <label htmlFor="wd-text-fields-dob"> Due: </label>
        <input type="date"
        value="2000-01-26"
        id="wd-text-fields-dob"/><br/>

      <h2></h2>

      <label htmlFor="wd-text-fields-dob"> Available from: </label>
        <input type="date"
        value="2000-01-26"
        id="wd-text-fields-dob"/><br/>

      <h2></h2>

      <label htmlFor="wd-text-fields-dob"> Until: </label>
        <input type="date"
        value="2000-01-26"
        id="wd-text-fields-dob"/><br/>

   
   
   
   
    </div>
);}
