import { Mail, Phone } from "lucide-react";
import React from "react";

export const contactDetails = [
	{
		"type": "phone",
		"label": "+94740779651",
		"link": "tel:+94740779651",
		"icon": Mail as React.ComponentType<any>
	},
	{
		"type": "email",
		"label": "migara1225@gmail.com",
		"link": "mail:migara1225@gmail.com",
		"icon": Phone as React.ComponentType<any>
	}
]
