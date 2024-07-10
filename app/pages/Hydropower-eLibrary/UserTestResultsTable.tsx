export const UserTestResultsTable: React.FC<React.ComponentProps<"table">> = (
  props
) => (
  <table {...props}>
    <thead>
      <tr>
        <th id="task">Task</th>
        <th id="feature_tested">Feature Tested</th>
        <th id="grade">Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Login/Homepage - Where are you? What can you do? Who made this?</td>
        <td>
          Does the homepage accurately describe the tool and data sources? Would
          a user understand them?
        </td>
        <td>---</td>
      </tr>
      <tr>
        <td>
          There is a project named “Felt” on the Teton River. Find the most
          recent “License Application” for that project.
        </td>
        <td>Find a Document</td>
        <td>🟢1 🟡2 🔶2 🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>
          (2 Part) Please save this document to easily find it later. Then,
          Could you save this in another way?
        </td>
        <td>'Favorite' document and/or 'Download' document</td>
        <td></td>
      </tr>
      <tr>
        <td>- Download</td>
        <td>Used first 4 times</td>
        <td>🟢4 🟡1 🔶0 🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>- Favorite</td>
        <td>Used first 1 time</td>
        <td>🟢3 🟡0 🔶1 🔻0 ◽️1</td>
      </tr>
      <tr>
        <td>
          <em>New Search</em>
        </td>
        <td>
          <em>Clear out the current search and start from scratch</em>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          Find all the Projects in “Montana” “Utah” and “Idaho” - how many are
          there?
        </td>
        <td>Searching in Projects Dataset, Finding and using "State" filter</td>
        <td>🟢2 🟡1 🔶2 🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>
          Please find all the projects in the current list that have an "Active
          License"
        </td>
        <td>
          Applying more filters, specifically the (License) "Status" Filter
        </td>
        <td>🟢3 🟡1 🔶1 🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>Please find "Active Licenses" in "Idaho" only</td>
        <td>Remove filters</td>
        <td>🟢5 🟡0 🔶0 🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>
          Find the project with the earliest future expiration date. The next
          active license to expire (Felt)
        </td>
        <td>Sorting by property, reversing sort</td>
        <td>🟢3 🟡1 🔶1 🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>Find the License Issuance for that project (Felt)</td>
        <td>
          'Search this Project for Documents' button, Document search (again).
        </td>
        <td>🟢3 🟡1 🔶1🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>
          <em>New Search</em>
        </td>
        <td>
          <em>Clear out the current search and start from scratch</em>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Find all NEPA Documents</td>
        <td>'Key Documents' filter and data tagging</td>
        <td>🟢1 🟡2 🔶2 🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>Search for all NEPA documents that mention “Salmon”</td>
        <td>
          Keyword search and understanding of why results were returned, dataset
          trust
        </td>
        <td>🟢1 🟡3 🔶1 🔻0 ◽️0</td>
      </tr>
      <tr>
        <td>Search for all NEPA documents that mention “Salmon” or "Trout"</td>
        <td>Advanced keyword search</td>
        <td>🟢0 🟡0 🔶0 🔻4 ◽️1</td>
      </tr>
      <tr>
        <td>Totals</td>
        <td>11 Tasks / 5 Participants</td>
        <td>🟢26 🟡12 🔶11 🔻4 ◽️2</td>
      </tr>
    </tbody>
  </table>
);
