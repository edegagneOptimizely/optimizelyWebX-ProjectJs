# Visitor Type Segmenting

<img src="../img/opti_logo.png" align="right" alt="Optimizely" width="120" height="120" />

Populate and push a custom attribute for segmenting results by visit type. Attribute will be populated with 'New' or 'Returning' values dependent upon the optimizely.get('visitor').first_session value.

<p align="center">
  <img src="../img/visitor_type.png" alt="Visitor type segmentation" width="750" border="1" />
</p>

### To use
1. Navigate to **Audiences** and select the **Attributes** tab.
2. Click on **Create New Attribute** and select **Custom Attribute**.
3. Create the new custom attribute and click **Save**:

    <p>
        <img src="../img/visitor_type_1.png" alt="Visitor type segmentation" width="500" border="1" />
    </p>

4. Navigate to project settings and click on **Project Js**.
5. Paste the provided javascript into Project Js and click **Save**.
    <p>
        <img src="../img/projjs.png" alt="Visitor type segmentation" width="500" border="1" />
    </p>
