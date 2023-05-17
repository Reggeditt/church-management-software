import { faker } from "@faker-js/faker";


const generateData = () => {
  const membersData = [];
  for(let i = 0; i < 100; i++) {
    membersData.push({
      id: i,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      photo: faker.image.avatar(),
      status: "active",
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      dob: faker.date.birthdate(),
      jobArea: faker.person.jobArea(),
      jobType: faker.person.jobType(),
      jobTitle: faker.person.jobTitle(),
      jobDescription: faker.person.jobDescriptor(),
      sex: faker.person.sex(),
      landmarks: [faker.location.cardinalDirection(), faker.location.cardinalDirection()],
      roles: ['member'],
      Portfolios: [],
      groups: ["group1", "group2"],
      ministries: ["ministry1", "ministry2"],
      payments: [],
    });
  }
  return membersData;
};

export default generateData;
