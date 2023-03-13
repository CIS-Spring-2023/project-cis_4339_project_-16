# Data Platform Frontend

This project uses [VueJS 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/).
For form validation [Vuelidate](https://vuelidate-next.netlify.app/) is used.

## Project setup

    npm install

### Before startup
You need to either have a local backend running and or use a cloud deployed backend.

Setup a .env file with following variables, e.g.:

    VITE_ROOT_API=http://localhost:3000

VITE_ROOT_API is the URL for the backend API, either on localhost or in the cloud.
### Compiles and hot-reloads for development

    npm run dev



# CRUDSERVICE.JS
This code is a Vue.js component that allows users to add and manage services. The component displays a list of 
active services and allows the user to edit or delete them.

## Dependencies
Vue.js

### Installation
The component can be added to a Vue.js project by copying the code into a new .vue file in the project's components 
directory.

### Usage
To use the component, simply include it in a parent component's template. The component will display a form for adding 
new services and a list of active services.

### Add Service
To add a new service, enter a description in the input field and click the "Add" button. If the description field 
is empty, an error message will be displayed.

### Edit Service
To edit an existing service, click the "Edit" button next to the service's description. The service's description 
and active status can be modified, and changes can be saved by clicking the "Save" button or discarded by clicking 
the "Cancel" button.

### Delete Service
To delete an existing service, click the "Delete" button next to the service's description.

### Toggle Active Status
To toggle a service's active status, click the radio button next to "Active" or "Inactive". The service's active 
status can also be changed by clicking the "Edit" button and modifying the service's active status.

###  Services created/editted/removed now interact with eventForm.vue
Services that are CRUD will be viewable in the eventForm.vue.  Checkboxes will be next to each service that will 
allow the user to submit a service linked to a created event.



# LogIn.vue
This code is a Vue.js component that provides a login form. The form accepts a username and password, and when 
submitted, the credentials are passed to a store for validation and authentication.

## Dependencies
Vue.js
Vuex (assumed to be included in the loggedInUser store)

### Installation
The component can be added to a Vue.js project by copying the code into a new .vue file in the project's components 
directory. The component assumes that a loggedInUser store is available and imported using the useLoggedInUserStore 
function.

### Usage
To use the component, include it in a parent component's template. The component displays a login form with fields 
for entering a username and password.

### Submitting the Form
When the form is submitted, the store.login method is called with the entered username and password as parameters. 
The store's login method is expected to validate the credentials and set the user's authentication status accordingly.

### Accessing the Store
The useLoggedInUserStore function returns a reference to the loggedInUser store, which can be used to access the 
store's state and methods in the component's setup function and template. In this example, the entire store instance 
is returned, but specific properties and methods can be selected for use as needed.

### Validation
The input fields in the form have the required attribute set, which will prevent the form from being submitted 
if either field is empty. Additional validation can be added to the store's login method to validate the entered 
credentials.



# pieChart.vue
This code is a Vue.js component that displays a pie chart using the Chart.js library. The component accepts two props: 
an array of labels for the chart's segments (pieLabels) and an array of data values for each segment (pieChartData).

## Dependencies
Vue.js
Chart.js

### Installation
To use this component in a Vue.js project, install the Chart.js library using a package manager such as npm or yarn. 
Then, copy the code into a new .vue file in the project's components directory.

### Usage
To use the component, include it in a parent component's template and pass in the pieLabels and pieChartData props.

### Props
The pieLabels prop is an array of labels for the chart's segments. The labels should correspond to the data values 
in the pieChartData prop.

The pieChartData prop is an array of data values for each segment of the pie chart.

### Customization
The appearance of the chart can be customized by modifying the properties in the new Chart options object. 
For example, the chart's colors can be changed by modifying the backgroundColor property in the datasets object.