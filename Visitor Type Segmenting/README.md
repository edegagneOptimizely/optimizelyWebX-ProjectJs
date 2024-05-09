# Visitor Type Segmenting

<img src="../img/opti_logo.png" align="right" alt="Optimizely" width="60" height="60" />

Populate and push a custom attribute for segmenting results by visit type. Attribute will be populated with 'New' or 'Returning' values dependent upon the optimizely.get('visitor').first_session value.

This code subscribes to the Optimizely "activated" listener. This ensures that the Optimizely visitor object is populated before accessing visitor information.

<p align="left">
  <img src="../img/visitor_type.png" alt="Visitor type segmentation" width="750" border="1" style="border: 1px solid grey;" />
</p>

### To use

1. Navigate to **Audiences** and select the **Attributes** tab.
2. Click on **Create New Attribute** and select **Custom Attribute**.
3. Create the new custom attribute and click **Save**:

    <p>
        <img src="../img/visitor_type_1.png" alt="Visitor type segmentation" width="500" border="1" style="border: 1px solid grey;" />
    </p>

4. Navigate to project settings and click on **Project Js**.
5. Paste the provided javascript into Project Js and click **Save**.
    <p>
        <img src="../img/projjs.png" alt="Visitor type segmentation" width="500" border="1" style="border: 1px solid grey;" />
    </p>
