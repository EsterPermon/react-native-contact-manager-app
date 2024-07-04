import {
  sortByFistName,
  groupContactsByLetter,
  createSectionList,
  groupContactsById,
  PHONE_NUMBER_REGEX,
} from "..";
import {
  mockedContacts,
  mockedExpoContacts,
  mockedExpoContactsWithMissingId,
} from "../__fixtures__/contacts";

jest.mock("react-native-uuid", () => ({
  v4: jest.fn(() => "unique-id"),
}));

describe("Utils Tests", () => {
  describe("PHONE_NUMBER_REGEX", () => {
    it("should match only valid phone numbers", () => {
      expect(PHONE_NUMBER_REGEX.test("123-456-7890")).toBe(true);
      expect(PHONE_NUMBER_REGEX.test("+1 (123) 456-7890")).toBe(true);
      expect(PHONE_NUMBER_REGEX.test("(123) 456-7890")).toBe(true);
      expect(PHONE_NUMBER_REGEX.test("123.456.7890")).toBe(true);
      expect(PHONE_NUMBER_REGEX.test("1234567890")).toBe(true);
      expect(PHONE_NUMBER_REGEX.test("+49 123 4567890")).toBe(true);
      expect(PHONE_NUMBER_REGEX.test("+491234567890")).toBe(true);

      expect(PHONE_NUMBER_REGEX.test("")).toBe(false);
      expect(PHONE_NUMBER_REGEX.test("number")).toBe(false);
      expect(PHONE_NUMBER_REGEX.test("123456")).toBe(false);
    });
  });

  describe("sortByFistName", () => {
    it("shoult sort contacts by first name", () => {
      const sortedContacts = mockedContacts.sort(sortByFistName);
      expect(sortedContacts[0].firstName).toBe("Alice");
      expect(sortedContacts[1].firstName).toBe("Bob");
      expect(sortedContacts[2].firstName).toBe("John");
    });
  });

  describe("groupContactsById", () => {
    it("should group contacts by id", () => {
      const groupedContacts = groupContactsById(mockedExpoContacts);
      expect(groupedContacts["1"].firstName).toBe("John");
      expect(groupedContacts["2"].firstName).toBe("Alice");
      expect(groupedContacts["3"].firstName).toBe("Bob");
    });

    it("should handle missing ids", () => {
      const groupedContacts = groupContactsById(
        mockedExpoContactsWithMissingId,
      );
      expect(groupedContacts["unique-id"].firstName).toBe("Charlie");
    });
  });

  describe("groupContactsByLetter", () => {
    it("should group contacts by the first letter of their first name", () => {
      const groupedContacts = groupContactsByLetter(mockedContacts);
      expect(groupedContacts["A"].length).toBe(1);
      expect(groupedContacts["B"].length).toBe(1);
      expect(groupedContacts["J"].length).toBe(1);
    });
  });

  describe("createSectionList", () => {
    it("should create a section list from grouped contacts", () => {
      const groupedContacts = groupContactsByLetter(mockedContacts);
      const sectionList = createSectionList(groupedContacts);
      expect(sectionList.length).toBe(3);
      expect(sectionList[0].title).toBe("A");
      expect(sectionList[1].title).toBe("B");
      expect(sectionList[2].title).toBe("J");
    });
  });
});
