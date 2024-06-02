# Contact manager

Cool application to show contacts save on your phone

Once you open the app, you should be asked to load contacts from your phone. If you allow, your contacts will be listed, sorted and grouped by the initial letter of the first name. You can see your contact details by clicking on it.

You can add new contacts or edit existing ones. First name and phone number are required, and phone number has to follow pattern.

You also can add a picture to your contact by loading from phone gallery or taking a photo with your phone camera (you should be asked to allow camera usage).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. ### Run the app

| Command           | Description           |
| ----------------- | --------------------- |
| `npm start`       | Runs in dev mode      |
| `npm test`        | Runs Unit tests       |
| `npm run ios`     | Runs on ios simulator |
| `npm run android` | Runs on android       |

## Considerations

It's important to keep in mind that this project's working time was only a few hours, so I had to compromise in order to deliver a working MVP. With more time, I would like to have worked more on the project's UI.

Also, due the time constraint, I decided to only add unit tests for the following logics:

- Phone number regex validations
- Sort by first name
- Group contacts by id
- Group contacts by first name letter
- Create section list rendering structure

However, with more time, I would've add e2e tests to cover the following functionalities:

- Contacts List

  - Contacts list should be rendered properly
  - Contact image should be rendered on contact item when available
  - Icon should be rendered on contact item when image not available
  - Click on plus icon should navigate to empty form
  - Click on contact should navigate to contact details screen

- Contact Details

  - Contact image should be rendered on details screen when available
  - Icon should be rendered on details screen when image not available
  - Click on edit button should navigate to form and prefill fields with contact info

- Contact Form

  - New contact should be persisted and added to the list on submit button click
  - Updates should be persisted on submit button click
  - Cancel button click should navigate to previous screen without persisting changes
  - Updates/additions with missing/invalid fields should not be persisted and proper error messages should be rendered
