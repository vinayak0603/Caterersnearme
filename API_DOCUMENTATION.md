# CaterEase API Documentation

**Base URL (Local):** `http://localhost:5000/api`  
**Base URL (Production):** *(Set your deployed URL here)*  
**Version:** 1.0.0  
**Protocol:** HTTP/HTTPS  
**Data Format:** JSON

---

## Table of Contents

1. [Overview](#overview)
2. [Data Model](#data-model)
3. [Endpoints](#endpoints)
   - [GET /api/caterers](#1-get-all-caterers)
   - [POST /api/caterers](#2-create-a-caterer)
   - [GET /api/caterers/:id](#3-get-caterer-by-id)
4. [Query Parameters](#query-parameters)
5. [Validation Rules](#validation-rules)
6. [Error Responses](#error-responses)
7. [Status Codes](#status-codes)

---

## Overview

The CaterEase REST API provides endpoints to manage catering service listings. It is built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. All responses are returned in JSON format.

---

## Data Model

### Caterer Object

| Field           | Type       | Required | Description                                              |
|-----------------|------------|----------|----------------------------------------------------------|
| `id`            | `string`   | Auto     | Unique MongoDB document ID (transformed from `_id`)      |
| `name`          | `string`   | ✅ Yes   | Name of the catering service                             |
| `location`      | `string`   | ✅ Yes   | City or area where the caterer operates                  |
| `pricePerPlate` | `number`   | ✅ Yes   | Cost per plate in INR (₹)                                |
| `cuisines`      | `string[]` | ✅ Yes   | Array of cuisine types offered (min 1 item required)     |
| `image`         | `string`   | ❌ No    | URL of the caterer's image (has a default Unsplash URL)  |
| `rating`        | `number`   | ❌ No    | Rating from 0.0 to 5.0 (defaults to `0`)                 |
| `createdAt`     | `string`   | Auto     | ISO 8601 timestamp when the document was created         |
| `updatedAt`     | `string`   | Auto     | ISO 8601 timestamp when the document was last updated    |

#### Example Caterer Object

```json
{
  "id": "65f1a2b3c4d5e6f7a8b9c0d1",
  "name": "Elite Gourmet",
  "location": "Delhi, NCR",
  "pricePerPlate": 800,
  "cuisines": ["Continental", "Mexican"],
  "image": "https://images.unsplash.com/photo-1555244162-803834f70033",
  "rating": 4.8,
  "createdAt": "2024-03-14T07:00:00.000Z",
  "updatedAt": "2024-03-14T07:00:00.000Z"
}
```

---

## Endpoints

---

### 1. Get All Caterers

Retrieves a list of all caterers. Supports optional server-side filtering via query parameters.

```
GET /api/caterers
```

#### Query Parameters (Optional)

| Parameter  | Type     | Description                                              | Example            |
|------------|----------|----------------------------------------------------------|--------------------|
| `name`     | `string` | Case-insensitive partial match on the caterer's name     | `?name=elite`      |
| `maxPrice` | `number` | Filter caterers with `pricePerPlate` ≤ this value        | `?maxPrice=600`    |

> **Note:** Filtering can also be done entirely on the frontend. The backend supports these query params as an additional option.

#### Request

```http
GET /api/caterers HTTP/1.1
Host: localhost:5000
```

#### Request (with filters)

```http
GET /api/caterers?name=gourmet&maxPrice=800 HTTP/1.1
Host: localhost:5000
```

#### Success Response

**Status:** `200 OK`

```json
[
  {
    "id": "65f1a2b3c4d5e6f7a8b9c0d1",
    "name": "Elite Gourmet",
    "location": "Delhi, NCR",
    "pricePerPlate": 800,
    "cuisines": ["Continental", "Mexican"],
    "image": "https://images.unsplash.com/photo-1555244162-803834f70033",
    "rating": 4.8,
    "createdAt": "2024-03-14T07:00:00.000Z",
    "updatedAt": "2024-03-14T07:00:00.000Z"
  },
  {
    "id": "65f1a2b3c4d5e6f7a8b9c0d2",
    "name": "Spice Route",
    "location": "Hyderabad, Telangana",
    "pricePerPlate": 450,
    "cuisines": ["Hyderabadi", "Mughlai"],
    "image": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
    "rating": 4.6,
    "createdAt": "2024-03-14T07:01:00.000Z",
    "updatedAt": "2024-03-14T07:01:00.000Z"
  }
]
```

#### Error Response

**Status:** `500 Internal Server Error`

```json
{
  "message": "Server Error"
}
```

---

### 2. Create a Caterer

Creates a new caterer listing in the database. All required fields must be present and valid.

```
POST /api/caterers
```

#### Request Headers

| Header         | Value              |
|----------------|--------------------|
| `Content-Type` | `application/json` |

#### Request Body

| Field           | Type       | Required | Validation Rules                                          |
|-----------------|------------|----------|-----------------------------------------------------------|
| `name`          | `string`   | ✅ Yes   | Must not be empty. Leading/trailing whitespace is trimmed.|
| `location`      | `string`   | ✅ Yes   | Must not be empty. Leading/trailing whitespace is trimmed.|
| `pricePerPlate` | `number`   | ✅ Yes   | Must be a valid number. Must not be empty.                |
| `cuisines`      | `string[]` | ✅ Yes   | Must be an array with at least 1 string item.             |
| `image`         | `string`   | ❌ No    | URL string. Uses a default image if not provided.         |
| `rating`        | `number`   | ❌ No    | Must be a number between `0` and `5` (inclusive).         |

#### Example Request

```http
POST /api/caterers HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "name": "Royal Feast",
  "location": "Mumbai, Maharashtra",
  "pricePerPlate": 700,
  "cuisines": ["North Indian", "Mughlai"],
  "image": "https://example.com/caterer.jpg",
  "rating": 4.3
}
```

#### Success Response

**Status:** `201 Created`

```json
{
  "id": "65f1a2b3c4d5e6f7a8b9c0d9",
  "name": "Royal Feast",
  "location": "Mumbai, Maharashtra",
  "pricePerPlate": 700,
  "cuisines": ["North Indian", "Mughlai"],
  "image": "https://example.com/caterer.jpg",
  "rating": 4.3,
  "createdAt": "2024-03-14T09:00:00.000Z",
  "updatedAt": "2024-03-14T09:00:00.000Z"
}
```

#### Validation Error Response

**Status:** `400 Bad Request`

```json
{
  "errors": [
    {
      "type": "field",
      "msg": "Name is required",
      "path": "name",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "Cuisines must be an array with at least one item",
      "path": "cuisines",
      "location": "body"
    }
  ]
}
```

#### Server Error Response

**Status:** `500 Internal Server Error`

```json
{
  "message": "Server Error",
  "error": "Detailed error message (development only)"
}
```

---

### 3. Get Caterer by ID

Retrieves a single caterer's full details by their unique MongoDB ID.

```
GET /api/caterers/:id
```

#### Path Parameters

| Parameter | Type     | Required | Description                         |
|-----------|----------|----------|-------------------------------------|
| `id`      | `string` | ✅ Yes   | The unique MongoDB `_id` of the caterer |

#### Example Request

```http
GET /api/caterers/65f1a2b3c4d5e6f7a8b9c0d1 HTTP/1.1
Host: localhost:5000
```

#### Success Response

**Status:** `200 OK`

```json
{
  "id": "65f1a2b3c4d5e6f7a8b9c0d1",
  "name": "Elite Gourmet",
  "location": "Delhi, NCR",
  "pricePerPlate": 800,
  "cuisines": ["Continental", "Mexican"],
  "image": "https://images.unsplash.com/photo-1555244162-803834f70033",
  "rating": 4.8,
  "createdAt": "2024-03-14T07:00:00.000Z",
  "updatedAt": "2024-03-14T07:00:00.000Z"
}
```

#### Not Found Response

**Status:** `404 Not Found`

```json
{
  "message": "Caterer not found"
}
```

#### Server Error Response

**Status:** `500 Internal Server Error`

```json
{
  "message": "Server Error"
}
```

---

## Query Parameters

Both query parameters for `GET /api/caterers` can be combined:

```
GET /api/caterers?name=royal&maxPrice=700
```

This returns all caterers whose name contains "royal" (case-insensitive) **and** whose price per plate is ≤ ₹700.

---

## Validation Rules

All validation is handled server-side using **express-validator** on the `POST /api/caterers` route.

| Field           | Rule                                            | Error Message                                        |
|-----------------|-------------------------------------------------|------------------------------------------------------|
| `name`          | Must not be empty                               | `"Name is required"`                                 |
| `location`      | Must not be empty                               | `"Location is required"`                             |
| `pricePerPlate` | Must be numeric and not empty                   | `"Price per plate must be a number"`                 |
| `cuisines`      | Must be an array with at least 1 element        | `"Cuisines must be an array with at least one item"` |
| `rating`        | Optional; must be numeric and between 0–5       | `"Rating must be between 0 and 5"`                   |

---

## Error Responses

### Global Error Handler

The server includes a global error handler for uncaught route errors:

```json
{
  "message": "Error description",
  "stack": "Stack trace (development only, null in production)"
}
```

### 404 — Route Not Found

If an undefined route is accessed:

**Status:** `404 Not Found`

```json
{
  "message": "Not Found - /api/unknown-route"
}
```

---

## Status Codes

| Code | Meaning                                                     |
|------|-------------------------------------------------------------|
| 200  | OK — Request succeeded                                      |
| 201  | Created — New caterer created successfully                  |
| 400  | Bad Request — Validation failed; check the `errors` array   |
| 404  | Not Found — Caterer not found or route does not exist       |
| 500  | Internal Server Error — Unexpected server-side failure      |

---

## Testing the API

You can test the API using tools like:
- **[Postman](https://postman.com)** — Import the endpoints above
- **[Thunder Client](https://www.thunderclient.com/)** — VS Code Extension
- **cURL** — Command line example:

```bash
# Get all caterers
curl http://localhost:5000/api/caterers

# Get caterers with filter
curl "http://localhost:5000/api/caterers?name=spice&maxPrice=500"

# Get caterer by ID
curl http://localhost:5000/api/caterers/65f1a2b3c4d5e6f7a8b9c0d1

# Create a new caterer
curl -X POST http://localhost:5000/api/caterers \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Caterer","location":"Chennai","pricePerPlate":400,"cuisines":["South Indian"],"rating":4.1}'
```
